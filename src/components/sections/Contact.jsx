import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        message: "",
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent");
            setFormData({name: "", email:"", message:""})
        })
        .catch(() => alert("Something went wrong :( Try again"))
    }

    return (
        <section id = "contact" className = "min-h-screen flex items-center justify-center py-20">
            <div className="px-4 w-150">
                <h2 className ="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent text-center">Contact Me</h2>
                <form className = "space-y-6" onSubmit={handleSubmit}>
                    <div className = "relative">
                        <input 
                        type = "text" 
                        id="name" required
                        name="name" 
                        value = {formData.name}
                        className = "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-color-blue-500/5" 
                        placeholder = "Name..."
                        onChange = {(e) => setFormData({...formData, name: e.target.value})}>
                        </input>

                        <input 
                        type = "email" 
                        id="email" required
                        name ="email" 
                        value = {formData.email}
                        className = "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-color-blue-500/5" 
                        placeholder = "Email..."
                        onChange = {(e) => setFormData({...formData, email: e.target.value})}>
                        </input>

                        <textarea type = "message" 
                        id="message" required
                        name ="message"
                        value = {formData.message}
                        rows={5}
                        className = "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-color-blue-500/5" 
                        placeholder = "Message Me"
                        onChange = {(e) => setFormData({...formData, message: e.target.value})}>
                        </textarea>
                    </div>

                    <button type = "submit" className = "w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}