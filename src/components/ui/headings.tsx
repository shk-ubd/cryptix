export const Heading1 = ({ text, className }: { text: string, className?: string }) => {
    return  <h1 className={`py-4 text-transparent bg-clip-text bg-gradient-to-t from-[#ffffff] to-[#cccccc] font-semibold text-3xl md:text-4xl lg:7xl ${className}`}>
            {text}
        </h1>
}

export const Heading2 = ({ text, className }: { text: string; className?: string }) => {
    return <h2 className={`py-3 text-transparent bg-clip-text bg-gradient-to-t from-[#f0f0f0] to-[#d0d0d0] font-semibold text-2xl md:text-3xl ${className}`}>
            {text}
        </h2>
    
};

export const Heading3 = ({ text, className }: { text: string; className?: string }) => {
    return  <h3 className={`py-2 text-transparent bg-clip-text bg-gradient-to-t from-[#e0e0e0] to-[#a0a0a0] font-medium text-xl md:text-2xl ${className}`}>
            {text}
        </h3>
};
