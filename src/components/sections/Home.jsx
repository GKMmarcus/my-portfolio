export const Home = () => {
    return(
    <section id = "home" className="min-h-screen flex items-center justify-center relative">
        <div className = "text-center z-10 px-4">
            <h1 className = "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent leading-right">
                Hello, I'm Marcus Phanphagna
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a computer science graduate who had a strong foundation in software development, data analysis, 
                IT support, and web development. My goal is to build and maintain full-stack application, automate 
                workflows, and troubleshoot technical issues.
            </p>
            <div className = "flex justify-center space-x-4">
                <a href="#projects" className = "bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    View Projects
                </a>


                <a href="#contact" className = "border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transistion-all duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10">
                    Contact Me
                </a>
            </div>
        </div>
    </section>
    );
};