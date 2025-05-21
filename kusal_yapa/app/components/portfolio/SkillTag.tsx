import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">
      {skill}
    </span>
  );
};

export default SkillTag;
