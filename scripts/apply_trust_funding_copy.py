import re, sys

GUIDE = (
    'Guided funding support for up to 15 financial assets. We review your trust and walk you '
    'through retitling each account with your bank or brokerage; you complete the transfers with '
    'the institution. Does not include real estate / deed transfers.'
)

changes = []


def edit(path, pairs, regex_pairs=()):
    with open(path, encoding='utf-8') as f:
        s = f.read()
    orig = s
    for old, new in pairs:
        n = s.count(old)
        if n == 0:
            sys.exit('NOT FOUND in %s: %r' % (path, old[:80]))
        s = s.replace(old, new)
        changes.append('%s: %dx %r' % (path, n, old[:60]))
    for pat, new in regex_pairs:
        s, n = re.subn(pat, new, s, flags=re.S)
        if n == 0:
            sys.exit('REGEX NOT FOUND in %s: %r' % (path, pat[:60]))
        changes.append('%s: %dx regex %r' % (path, n, pat[:40]))
    if s == orig:
        sys.exit('no change in %s' % path)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(s)


edit('app/compare-packages/page.tsx', [("'Full Trust Funding'", "'Trust Funding Guidance'")])

edit(
    'app/recommended-service/page.tsx',
    [
        ("'Full Trust Funding'", "'Trust Funding Guidance'"),
        (
            "        name: 'Trust Funding',\n        price: 1500,\n        description: 'Funding of up to 15 financial assets into trust. Does not include real estate / deed transfers.'",
            "        name: 'Trust Funding Guidance',\n        price: 1500,\n        description: '" + GUIDE + "'",
        ),
    ],
    [
        (
            r'<strong>10\.05 Trust Funding\.</strong>.*?</p>',
            "<strong>10.05 Trust Funding Guidance.</strong> Trust funding guidance is included in all trust "
            "packages and trust services (including the Trust Package, A La Carte Revocable Living Trust, and "
            "A La Carte Irrevocable Trust). The Firm will review Client's assets, identify which assets should "
            "be transferred into the trust, and provide Client with instructions and any trust certification or "
            "letters of instruction needed to complete each transfer. Client is responsible for completing the "
            "transfers with Client's banks, brokerages, and other institutions; the Firm does not retitle "
            "Client's financial accounts on Client's behalf. One (1) deed transfer of real estate into the trust "
            "is drafted and recorded by the Firm and is included; additional deeds are $500 each. For a la carte "
            "services that do not include a trust, trust funding guidance is not included unless separately "
            "purchased. The Firm is not responsible for delays caused by third-party institutions or for Client's "
            "failure to complete transfers or to provide required information or documentation in a timely "
            "manner.</p>",
        )
    ],
)

edit(
    'app/services-pricing/page.tsx',
    [
        (
            'all fees are included -- full trust funding, notarization, recording costs, and one (1) deed transfer of real estate into the trust.',
            'all fees are included -- trust funding guidance, notarization, recording costs, and one (1) deed transfer of real estate into the trust.',
        ),
        (
            'Yes -- full trust funding is included in all of our trust packages and trust services. We draft one (1) deed for you and record it with the Recorder of Deeds as part of the service.',
            'Yes -- as to real estate. We draft one (1) deed for you and record it with the Recorder of Deeds as part of the service. Trust funding guidance for your other assets is also included: we tell you exactly what to retitle and how, and you complete those transfers with your institutions.',
        ),
        (
            'Yes -- full trust funding is included in all trust packages and trust services at no additional cost. Our team will coordinate directly with your banks, financial institutions, and other entities to transfer your assets into the trust. We also draft and record one (1) deed to transfer real estate into the trust as part of the service. Additional deeds beyond the first are $500 each. Our goal is to ensure all your assets are properly transferred to the trust or have designated pay-on-death beneficiaries. Trust funding is also available as a standalone a la carte service for $1,500 for clients who have an existing trust.',
            'Yes -- trust funding guidance is included in all trust packages and trust services at no additional cost. We review your assets, tell you which ones belong in the trust, and give you the trust certification, letters of instruction, and step-by-step direction you need. You complete the transfers with your banks and financial institutions; we do not retitle your accounts for you. We do draft and record one (1) deed to transfer real estate into the trust as part of the service. Additional deeds beyond the first are $500 each. Trust funding guidance is also available as a standalone a la carte service for $1,500 for clients who already have a trust.',
        ),
        ('Do You Provide Assistance With Funding My Trust?', 'Do You Help Me Fund My Trust?'),
    ],
)

edit(
    'lib/services-data.ts',
    [
        ("'Full Trust Funding'", "'Trust Funding Guidance'"),
        ("    id: 'trust-funding-service',\n    name: 'Trust Funding',", "    id: 'trust-funding-service',\n    name: 'Trust Funding Guidance',"),
        (
            "description: 'Funding of up to 15 financial assets into trust. Includes review of trust and funding of financial assets. Does not include real estate / deed transfers.'",
            "description: '" + GUIDE + "'",
        ),
    ],
)

edit(
    'components/services/CategorizedServices.tsx',
    [
        ("'Full Trust Funding'", "'Trust Funding Guidance'"),
        (
            "          id: 'trust-funding-service',\n          name: 'Trust Funding',\n          category: 'a-la-carte',\n          fixedPrice: 1500,\n          description: 'Funding of up to 15 financial assets into trust. Does not include real estate / deed transfers.',",
            "          id: 'trust-funding-service',\n          name: 'Trust Funding Guidance',\n          category: 'a-la-carte',\n          fixedPrice: 1500,\n          description: '" + GUIDE + "',",
        ),
        (
            "description: 'For funding multiple properties into an existing or newly created trust. May be added to any package or trust funding service.',",
            "description: 'For transferring additional properties into an existing or newly created trust. We draft and record the deed. May be added to any package or trust funding guidance service.',",
        ),
    ],
)

edit(
    'components/services/CategorizedServicesDisplay.tsx',
    [
        ("'Full Trust Funding'", "'Trust Funding Guidance'"),
        (
            "          name: 'Trust Funding',\n          fixedPrice: 1500,\n          note: 'Up to 15 assets. Does not include real estate / deed transfers.',",
            "          name: 'Trust Funding Guidance',\n          fixedPrice: 1500,\n          note: 'Guidance for retitling up to 15 financial assets into your trust. You complete the transfers with your institutions. Does not include real estate / deed transfers.',",
        ),
        (
            "note: 'A custom-drafted irrevocable trust tailored to your goals. Includes full trust funding.'",
            "note: 'A custom-drafted irrevocable trust tailored to your goals. Includes trust funding guidance.'",
        ),
    ],
)

edit(
    'app/chicago-revocable-trusts-lawyer/page.tsx',
    [
        (
            '<span>Complete funding assistance for all asset types</span>',
            '<span>Trust funding guidance for every asset type, so you know exactly what to retitle and how</span>',
        ),
        (
            'powers of attorney, healthcare directives, and initial funding assistance.',
            'powers of attorney, healthcare directives, and trust funding guidance.',
        ),
    ],
)

edit(
    'public/pricing-sheet.html',
    [
        (
            '<div class="service-name">Trust Funding</div>\n            <div class="service-sub">Funding of up to 15 financial assets into trust. Does not include real estate / deed transfers.</div>',
            '<div class="service-name">Trust Funding Guidance</div>\n            <div class="service-sub">Guidance for retitling up to 15 financial assets into your trust. We review the trust and walk you through each transfer; you complete them with your institutions. Does not include real estate / deed transfers.</div>',
        ),
        (
            '1 TODI of Real Estate to Trust, Full Trust Funding, Notarization',
            '1 TODI of Real Estate to Trust, Trust Funding Guidance, Notarization',
        ),
    ],
)

edit(
    'app/process/page.tsx',
    [
        (
            "                title: 'Trust Funding',\n                description: 'Transfer assets into your trust to ensure your plan works as intended when the time comes.',",
            "                title: 'Trust Funding Guidance',\n                description: 'We show you which assets belong in the trust and how to retitle each one, and we draft and record the deed for your real estate. You complete the account transfers with your institutions.',",
        )
    ],
)

edit(
    'components/home/PracticeAreasSection.tsx',
    [("{ name: 'Trust Funding & Asset Transfer', href: '/services-pricing/' },", "{ name: 'Trust Funding Guidance', href: '/services-pricing/' },")],
)

edit(
    'public/llms.txt',
    [
        (
            '- Trust administration: guidance for successor trustees, trust funding, and asset transfers.',
            '- Trust administration: guidance for successor trustees, and trust funding guidance (the firm advises on and directs how to retitle assets into a trust and drafts and records deeds; clients complete account transfers with their own institutions).',
        )
    ],
)

edit(
    'app/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/page.tsx',
    [
        (
            'Our flat-fee trust packages include drafting, funding assistance, and all supporting documents',
            'Our flat-fee trust packages include drafting, trust funding guidance, and all supporting documents',
        )
    ],
)

edit(
    'app/blog/should-you-put-your-house-in-a-trust-in-illinois/page.tsx',
    [
        (
            'drafts revocable living trusts and handles all deed transfers to fund your trust',
            'drafts revocable living trusts and prepares and records the deed that moves your home into the trust',
        )
    ],
)

print('\n'.join(changes))
print('OK: %d replacements applied' % len(changes))
