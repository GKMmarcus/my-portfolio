export const About = () =>{

    const frontendSkills = ["HTML","CSS", "JavaScript", "React"]

    const backendSkills = ["Python", "Java", "PHP", "SQL"]

    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <div className = "max-w-3xl mx-auto px-4">
                <h2 className = "text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className = "rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className ="text-gray-300 mb-6">
                        A computer science graduate passionate about building intuitive web applications and solving complex problems with code.
                    </p>

                    <div className ="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className = "text-xl font-bold mb-4"> Frontend</h3>
                            <div className = "flex flex-wrap gap-2">
                                {frontendSkills.map((tech,key) =>(
                                    <span key = {key} className = "bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className = "text-xl font-bold mb-4"> Backend</h3>
                            <div className = "flex flex-wrap gap-2">
                                {backendSkills.map((tech,key) =>(
                                    <span key = {key} className = "bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div className = "grid grid-cols=1 md:grid-cols-2 gap-6 mt-8">
                    <div className ="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                       <h3 className = "text-xl font-bold mb-4"> Education </h3>
                       <ul className ="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> B.S. in Computer Science</strong> - Indiana Institute of Technology (Graduated in May 2025)
                            </li>
                            <li>
                                <strong> Relevant Coursework: </strong> Database Systems, Web Development, Network Design, Data Structures & Algorithm, Operating Systems
                            </li>
                       </ul>
                    </div>
                    <div className ="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                       <h3 className = "text-xl font-bold mb-4"> Work Experience </h3>
                       <div className = "space-y-4 text-gray-300">

                            <div>
                                <h4 className = "font-semibold"> Library Associate at Indiana Tech</h4>
                                <p>
                                    Assisted students and faculty with research tools and library resources, maintained organization of materials, and provided front desk support.
                                </p>
                            </div>

                            <div>
                                <h4 className = "font-semibold"> Crew Member at Dairy Queen </h4>
                                <p>
                                    Delivered excellent customer service in a high-volume environment.
                                </p>
                            </div>

                            <div>
                                <h4 className = "font-semibold"> Work Study Student at Indiana Tech  </h4>
                                <p>
                                    Supported administrative departments by performing clerical tasks, data entry, and scheduling.
                                </p>
                            </div>

                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};