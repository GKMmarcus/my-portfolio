export const Projects = () => {
    return(
        <section id = "projects" className = "min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className = "text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent text-center">
                    Feature Projects
                </h2>
                <div className ="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className ="text-xl font-bold mb-2">Sports Sales Dashboard</h3>
                        <p className ="text-gray-400 mb-3">A data dashboard that shows sportwear trends from 2023 to help optimize business decsions for 2024</p>
                        <div>
                            {["PHP","MariaDB","HTML","CSS"].map((tech,key) => (
                                <span key = {key} className = "bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                </span>
                            ))}
                        </div>
                        <div className = "flex justify-between items-center">
                            <a href = "https://public.tableau.com/app/profile/marcus.phanphagna/viz/shared/86Q5KN25H" className = "text-red-400 hover:text-red-300 transition-colors"> View Project </a>
                        </div>
                    </div>

                    <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className ="text-xl font-bold mb-2">Stress Management and Anxiety App</h3>
                        <p className ="text-gray-400 mb-3"> A full-stack app that guides users through breathing, meditation, and journaling to reduce anxiety and track progress.</p>
                        <div>
                            {["Python","MySQL","HTML","CSS"].map((tech,key) => (
                                <span key = {key} className = "bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                </span>
                            ))}
                        </div>
                        <div className = "flex justify-between items-center">
                            <a href = "https://github.com/GKMmarcus/Stress-and-Anxiety-Management-App" className = "text-red-400 hover:text-red-300 transition-colors"> View Project </a>
                        </div>
                    </div>

                    <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className ="text-xl font-bold mb-2">Course Registration</h3>
                        <p className ="text-gray-400 mb-3">A web-based platform that allows students to browse, select, and register for academic courses based on availability, prerequisites, and personal schedules.</p>
                        <div>
                            {["PHP","MariaDB","HTML","CSS"].map((tech,key) => (
                                <span key = {key} className = "bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                </span>
                            ))}
                        </div>
                        <div className = "flex justify-between items-center">
                            <a href = "https://github.com/LuaDeveloped/CourseRegistration" className = "text-red-400 hover:text-red-300 transition-colors"> View Project </a>
                        </div>
                    </div>

                    <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className ="text-xl font-bold mb-2">Furniture Ordering System</h3>
                        <p className ="text-gray-400 mb-3">An e-commerce application designed to streamline the process of browsing, customizing, and purchasing furniture online</p>
                        <div>
                            {["Java"].map((tech,key) => (
                                <span key = {key} className = "bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                </span>
                            ))}
                        </div>
                        <div className = "flex justify-between items-center">
                            <a href = "https://github.com/LittleDollReads/Furniture-Managmet-System" className = "text-red-400 hover:text-red-300 transition-colors"> View Project </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}