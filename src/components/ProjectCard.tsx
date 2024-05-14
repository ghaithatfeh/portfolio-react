import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
	project: {
		image: string;
		title: string;
		isArabic?: boolean;
		description: string;
		url: string;
	};
}
const ProjectCard = ({ project }: Props) => {
	return (
		<div className="item">
			<div className="card shadow mb-4">
				<img
					src={project.image}
					className="card-img-top"
					alt="project image"
					style={project.title == "Ancestry App" ? { objectFit: "contain" } : {}}
				/>
				<div className="card-body">
					<h3 className={project.isArabic ? "card-title ar-text" : "card-title"}>{project.title}</h3>
					<p className="card-text">{project.description}</p>
					<a href={project.url} className="btn my-btn-primary" target="_blank">
						<span>Show Project</span>
						<FontAwesomeIcon icon={faAngleRight} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
