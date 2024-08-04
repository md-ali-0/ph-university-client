import { Button, Col, Divider, Form, Input, Row } from "antd";
import { useEffect } from "react";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHForm from "../../../components/form/PHForm";

import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PInput";
import { bloodGroupOptions } from "../../../constants/global";
import {
    useGetAcademicDepartmentsQuery,
    useGetAcademicFacultiesQuery,
    useGetAllSemestersQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/usermanagement.api";

const CreateStudent = () => {
    const [addStudent, { isSuccess }] = useAddStudentMutation();

    const { data: sData, isLoading: sIsLoading } =
        useGetAllSemestersQuery(undefined);

    const { data: dData, isLoading: dIsLoading } =
        useGetAcademicDepartmentsQuery(undefined);

    const { data: fData, isLoading: fIsLoading } =
        useGetAcademicFacultiesQuery(undefined);

    const semesterOptions = sData?.data?.map((item) => ({
        value: item._id,
        label: `${item.name} ${item.year}`,
    }));

    const departmentOptions = dData?.data?.map((item) => ({
        value: item._id,
        label: item.name,
    }));

    const facultyOptions = fData?.data?.map((item) => ({
        value: item._id,
        label: item.name,
    }));

    useEffect(() => {
        if (isSuccess) {
            toast.success("Student Created Successfully");
        }
    }, [isSuccess]);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);

        const studentData = {
            password: "student123",
            student: data,
        };

        const formData = new FormData();

        formData.append("data", JSON.stringify(studentData));
        formData.append("file", data.image);
        console.log();

        addStudent(formData);
    };

    // Default values for the form fields
    const defaultValues = {
        name: {
            firstName: "John",
            lastName: "Doe",
        },
        gender: "male",
        age: 22,
        email: "john.doe@gmail.com",
        contact: "+1234567890",
        bloodGroup: "AB+",
        presentAddress: "123 Main St, Anytown, USA",
        guardian: {
            fatherName: "Michael Doe",
            fatherOccupation: "Engineer",
            fatherContactNo: "123-456-7891",
            motherName: "Jane Doe",
            motherOccupation: "Teacher",
            motherContactNo: "123-456-7892",
        },
        localGuardian: {
            name: "Uncle Bob",
            occupation: "Lawyer",
            contactNo: "123-456-7893",
            address: "123 Main St, Anytown, USA",
        },
    };

    return (
        <Row>
            <Col span={24}>
                <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <Divider>Personal Information</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="name.firstName"
                                label="First Name"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="name.lastName"
                                label="Middle Name"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect
                                name="gender"
                                label="Gender"
                                options={[
                                    { value: "male", label: "Male" },
                                    { value: "female", label: "Female" },
                                ]}
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHDatePicker
                                name="dateOfBirth"
                                label="Date Of Birth"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Controller
                                name="image"
                                render={({
                                    field: { onChange, value, ...field },
                                }) => (
                                    <Form.Item label="Picture">
                                        <Input
                                            type="file"
                                            value={value?.fileName}
                                            {...field}
                                            size="large"
                                            onChange={(e) =>
                                                onChange(e.target.files?.[0])
                                            }
                                        />
                                    </Form.Item>
                                )}
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect
                                options={bloodGroupOptions}
                                name="bloodGroup"
                                label="Blood group"
                            />
                        </Col>
                    </Row>
                    <Divider>Contact Information</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="number" name="age" label="Age" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="email" name="email" label="Email" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="contact"
                                label="Contact"
                            />
                        </Col>
                        <Col span={24}>
                            <PHInput
                                type="text"
                                name="presentAddress"
                                label="Present Address"
                            />
                        </Col>
                    </Row>
                    <Divider>Guardian</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.fatherName"
                                label="Father Name"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.fatherOccupation"
                                label="Father Occupation"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.fatherContactNo"
                                label="Father ContactNo"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.motherName"
                                label="Mother Name"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.motherOccupation"
                                label="Mother Occupation"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="guardian.name"
                                label="Mother ContactNo"
                            />
                        </Col>
                    </Row>
                    <Divider>Local Guardian</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="localGuardian.name"
                                label="Name"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="localGuardian.occupation"
                                label="Occupation"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="localGuardian.contactNo"
                                label="Contact No."
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput
                                type="text"
                                name="localGuardian.address"
                                label="Address"
                            />
                        </Col>
                    </Row>
                    <Divider>Academic Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect
                                options={semesterOptions}
                                disabled={sIsLoading}
                                name="admissionSemester"
                                label="Admission Semester"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect
                                options={departmentOptions}
                                disabled={dIsLoading}
                                name="academicDepartment"
                                label="Admission Department"
                            />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect
                                options={facultyOptions}
                                disabled={fIsLoading}
                                name="academicFaculty"
                                label="Academic Faculty"
                            />
                        </Col>
                    </Row>
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Row>
    );
};

export default CreateStudent;
