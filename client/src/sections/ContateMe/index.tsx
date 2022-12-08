import { EnvelopeOpen, PaperPlaneTilt, PhoneCall } from "phosphor-react"
import { useForm } from "react-hook-form";
import { Title } from "../../components/Title"
import {  FirstInformation    , ContateMeContainer, FormContainer, Phone, Email } from "./styles"
import { zodResolver } from '@hookform/resolvers/zod'
import * as  zod from "zod"
import { api } from "../../api/axios";

const contactFormSchema = zod.object({
    senderNumber: zod.string(),
	email: zod.string().email(),
	name: zod.string(),
	lastName: zod.string(),
	subject: zod.string(),
	message: zod.string(),
})

type ContactFormType = zod.infer<typeof contactFormSchema>

export const ContateMe = () => {

    const { register, handleSubmit, reset, getValues } = useForm<ContactFormType>({
        resolver: zodResolver(contactFormSchema)
    });

    function sendMessage() {
        const datas = getValues()
        console.log(datas)

        api.post("/", JSON.stringify(datas))
    }

    function handleFormSubmit() {
        sendMessage()
        // reset()
    }

    return (
         <ContateMeContainer>
             <Title title="contate-me" />
            <div>
                <FirstInformation>
                    <h3> Vamos conversar!</h3>
                    <span>
                        Sinta-se livre para mandar mensagem. Estou sempre aberto a 
                        opiniões, sugestões de projetos, ideias criativas, 
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
                <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
                    <div>
                        <input type="text" {...register("name")}  placeholder="Nome" />
                        <input type="text" {...register("lastName")} placeholder="Sobrenome" />
                    </div>

                    <input type="tel" {...register("senderNumber")} placeholder="Seu número Ex.: (87) 99819-9329" />
                    <input type="email" {...register("email")} placeholder="Seu email" />

                    <input type="text" {...register("subject")} placeholder="Assunto" />
                    <textarea placeholder="O que você que me falar?" {...register("message")} ></textarea>

                    <button type="submit"> Enviar <PaperPlaneTilt size={20} />  </button>
                    
                </FormContainer>
            </div>
     </ContateMeContainer>
    )
}