import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        allAcademicSemester : builder.query({
            query: ()=>{
                // const token = useAppSelector(selectCurrentToken);
                return {
                    url: '/academic-semester/all'
                }
            }
        })
    })
})

export const { useAllAcademicSemesterQuery } = academicSemesterApi