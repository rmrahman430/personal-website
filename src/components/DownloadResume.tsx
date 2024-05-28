const DownloadResume: React.FC = () => {
  const resumeUrl = "/files/MyResume.pdf";
  return (
    <a href={resumeUrl} download="MyResume.pdf">
      Download Resume
    </a>
  );
};

export default DownloadResume;
