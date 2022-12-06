import { EnvelopeOpen, PaperPlaneTilt, PhoneCall } from "phosphor-react"
import { Title } from "../../components/Title"
import {  FirstInformation    , ContateMeContainer, FormContainer, Phone, Email } from "./styles"


export const ContateMe = () => {
    return (
         <ContateMeContainer>
             <Title title="contate-me" />
            <div>
                <FirstInformation>
                    <h3> Vamos conversar!</h3>
                    <span>
                        Sinta livre para mandar mensagem. Estou sempre aberto a 
                        opiniões, sugestões de projetos, odeias criativas, 
                        oportunidades e etc. 
                    </span>

                    <div>
                        <Phone> 
                            <PhoneCall size={30}  color="#D19900" /> 
                            <div>
                                <p>Telefone</p>
                                <span>+55 {'(87)'} 99819-9329</span>
                            </div>
                        </Phone>
                        <Email> 
                            <EnvelopeOpen size={30}  color="#D19900" />
                            <div>
                                <p>Email</p>
                                <span> barrosoeduado64@gmail.com </span>
                            </div>
                        </Email>
                    </div>
                </FirstInformation>
                <FormContainer>
                    <div>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Sobrenome" />
                    </div>

                    <input type="text" placeholder="Assunto" />
                    <textarea placeholder="O que você que me falar?"></textarea>

                    <button type="submit"> Enviar <PaperPlaneTilt size={20} />  </button>
                    
                </FormContainer>
            </div>
     </ContateMeContainer>
    )
}