import { EnvelopeOpen, PaperPlaneTilt, PhoneCall } from "phosphor-react"
import { useForm } from "react-hook-form";
import { Title } from "../../components/Title"
import { FirstInformation, ContateMeContainer, FormContainer, Phone, Email, CheckboxContainer } from "./styles"
import { zodResolver } from '@hookform/resolvers/zod'
import * as  zod from "zod"
import { api } from "../../api/axios";

const contactFormSchema = zod.object({
    senderNumber: zod.string().nullable(),
    email: zod.string().email(),
    name: zod.string(),
    lastName: zod.string(),
    subject: zod.string(),
    message: zod.string(),
    whatsAppCheck: zod.boolean(),
    emailCheck: zod.boolean(),
})

type ContactFormType = zod.infer<typeof contactFormSchema>

export const ContateMe = () => {

    const { register, handleSubmit, reset, watch, getValues } = useForm<ContactFormType>({
        resolver: zodResolver(contactFormSchema)
    });
    watch()

    function sendMessage() {
        const datas = getValues()

        api.post("/", datas)
    }


    function isValid() {

        const validation = getValues()
        
        const senderNumber = !validation.senderNumber
        const email = !validation.email
        const name = !validation.name
        const lastName = !validation.lastName
        const subject = !validation.subject
        const message = !validation.message
        const whatsAppCheck = validation.whatsAppCheck
        const emailCheck = validation.emailCheck
        
        const contactPreference = whatsAppCheck || emailCheck
        const text = email || subject || message || name || lastName
        
        return text || !contactPreference
    }

    function handleFormSubmit() {
        sendMessage()
        reset()
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
                            <PhoneCall size={30} color="#D19900" />
                            <div>
                                <p>Telefone</p>
                                <span>+55 {'(87)'} 99819-9329</span>
                            </div>
                        </Phone>
                        <Email>
                            <EnvelopeOpen size={30} color="#D19900" />
                            <div>
                                <p>Email</p>
                                <span> barrosoeduado64@gmail.com </span>
                            </div>
                        </Email>
                    </div>
                </FirstInformation>
                <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
                    <div>
                        <input type="text" {...register("name", { required: true })} placeholder="Nome *" />
                        <input type="text" {...register("lastName")} placeholder="Sobrenome *" />
                    </div>

                    <input type="tel" {...register("senderNumber", { required: true })} placeholder="Seu número Ex.: (87) 99999-9999 (Opcional)" />
                    <input type="email" {...register("email", { required: false })} placeholder="Seu email *" />

                    <input type="text" {...register("subject", { required: true })} placeholder="Assunto *" />
                    <textarea placeholder="O que você que me falar? *" {...register("message", { required: true })} ></textarea>

                    <CheckboxContainer>
                        <span>Preferencia de contato:</span>

                        <label >
                            <input type="checkbox" {...register('whatsAppCheck')} />
                            WhatsApp
                        </label>
                        <label >
                            <input type="checkbox" {...register('emailCheck')} />
                            Email
                        </label>

                    </CheckboxContainer>

                    <button type="submit" onClick={() => isValid()} disabled={isValid()}> Enviar <PaperPlaneTilt size={20} />  </button>

                </FormContainer>
            </div>
        </ContateMeContainer>
    )
}