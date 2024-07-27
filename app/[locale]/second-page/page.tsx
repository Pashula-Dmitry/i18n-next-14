import { Footer } from '@/app/[locale]/components/Footer'
import { useTranslation } from '@/app/[locale]/i18n'
import Link from 'next/link'

type Props = {
    params: {
        locale: string
    }
}

export default async function Page({ params: { locale } }: Props) {
    const { t } = await useTranslation(locale, 'second-page')
    return (
        <>
            <h1>{t('title')}</h1>
            <Link href={`/${locale}`}>{t('back-to-home')}</Link>
            <Footer lng={locale} />
        </>
    )
}
