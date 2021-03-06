
import React from 'react'

import SectionIndex from './SectionIndex'
import ActivitySection from './Activity/Section'
import BeneficiariesSection from './Beneficiaries/Section'
import LanguageSection from './Language/Section'
import ImpactSection from './Impact/Section'
import CommunitiesSection from './Communities/Section'
import ClassificationSection from './Classification/Section'

export default function BotAnalysisPage() {
    return (
        <span>
            <SectionIndex/>

            <ImpactSection/>
            <BeneficiariesSection/>
            <LanguageSection/>
            <ActivitySection/>
            <CommunitiesSection/>
            <ClassificationSection/>
        </span>
    )
}
