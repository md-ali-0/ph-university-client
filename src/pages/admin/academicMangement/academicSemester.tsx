import { useAllAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemester";

const AcademicSemester = () => {
  const { data, isLoading, isSuccess, error} = useAllAcademicSemesterQuery("")
  console.log(data);
  console.log("Loading: " + isLoading);
  console.log("isSuccess: " + isSuccess);
  console.log("error: " + error);
  
  return (
    <div>
      AcademicSemester Component
    </div>
  );
};

export default AcademicSemester;