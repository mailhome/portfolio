import { FaWhatsapp } from "react-icons/fa6";
import { HeadingProps } from "../header/heading-props";
import { RiMailSendLine } from "react-icons/ri"
import { ContactItems } from "./contact-items";
import { ContactForm } from "./contact-form";

const contact = [
    {
        icon: RiMailSendLine,
        label: "Email",
        details: "mailhome.henry@gmail.com",
        href: "https://api.whatsapp.com/send?phone=2348117195397"
    },

    {
        icon: FaWhatsapp,
        label: "Whatsapp",
        details: "+234-816-802-8145",
        href: "https://mail.google.com/mail/u/0/#sent?compose=new"

    },


]

export const Contact = () => {
    return (
        <div className="w-full h-auto mt-20">
            <div className="width-container py-4">
                <HeadingProps
                    heading="Get In Touch"
                    desc="Contact Me" />
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-12">
                    <div className="">
                        <h1 className="text-xl flex items-center font-bold justify-center  text-neutral-800 dark:text-neutral-200">Talk to me</h1>
                        <div className="flex items-start justify-center">
                            <div className="flex flex-col items-start justify-start gap-y-6 p-4 w-6/12">
                                {contact.map(({ icon, href, label, details }) => (
                                    <ContactItems
                                        key={href}
                                        href={href}
                                        label={label}
                                        icon={icon}
                                        details={details} />
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="w-full flex items-start flex-col gap-y-6 justify-start">
                        <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                            Write me your Project</h1>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}