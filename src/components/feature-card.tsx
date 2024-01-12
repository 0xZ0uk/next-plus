import React from "react";

interface FeatureCardProps {
	title: string;
	children?: React.ReactNode | React.ReactNode[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, children }) => {
	return (
		<div className="border rounded-lg min-h-32 p-4">
			<div>
				<h4 className="text-lg font-bold">{title}</h4>
			</div>
			<div className="text-muted-foreground">{children}</div>
		</div>
	);
};

export default FeatureCard;
