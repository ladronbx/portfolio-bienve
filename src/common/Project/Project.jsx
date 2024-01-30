

export const Project = ({ title, description, longDescription, technologies, link, code}) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{longDescription}</p>
            {/* Quiero que sea un carrusel con swiper */}
            <img src={img} alt={title} />
            <img src={gif} alt={title} />
            <p>Technologies: {technologies.join(", ")}</p>
            <a href={link} target="_blank" rel="noreferrer">
                <button>See project</button>
            </a>
            <a href={code} target="_blank" rel="noreferrer">
                <button>See code</button>
            </a>
        </div>
    );
};

