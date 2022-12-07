import { Alarm, Briefcase, CheckCircle, Student } from "phosphor-react"
import { DateInformation, ExperienceContainer, ExperienceInformation } from "./styles"


interface IExperienceProps {
    startedAt?: string;
    finishedAt?: string;
    companyName: string;
    specification: string;
    isFinished?: boolean;
    isAJob?: boolean;
    withoutExperiences?: boolean;
}

export const Experience = (
    { startedAt, finishedAt, companyName, specification, isFinished, isAJob, withoutExperiences }: IExperienceProps
) => {
    return (
        <ExperienceContainer>
            <DateInformation>
                {
                    !isAJob ? <Student size={32} color="#EDD696" /> :
                        <Briefcase size={32} color="#EDD696" />
                }

                {
                    !withoutExperiences &&
                    <>
                        <div>
                            <p>{startedAt}</p> <span>--</span> <p>{finishedAt}</p>
                        </div>

                        {
                            isFinished ? (<CheckCircle size={32} color="#EDD696" />) :
                                (<Alarm size={32} color="#EDD696" />)
                        }
                    </>
                }

            </DateInformation>

            <ExperienceInformation>
                <div></div>
                <div>
                    <strong> {companyName} </strong>
                    <span> {specification} </span>
                </div>
            </ExperienceInformation>
        </ExperienceContainer>
    )
}