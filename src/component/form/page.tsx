import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import type { FormProps } from "antd/lib/form";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { API_URL } from "@/utils/utils";

type DataType = {
  name: string;
  price: number;
  description: string;
  type: string;
  picture: string;
};

const FormComponent: React.FC = ({ id }: any) => {
  const [imageUrl, setImageUrl] = useState<string>(""); // State to store image URL
  const [fileList, setFileList] = useState<any[]>([]); // State to store file list
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataType>({
    name: "",
    price: 0,
    description: "",
    type: "",
    picture: "",
  });

  const onFinish: FormProps["onFinish"] = async (values) => {
    setLoading(true);
    try {
      const uploadedImageUrl = await getUrlUpdateUserImg(
        fileList[0].originFileObj
      );
      console.log("Uploaded Image URL:", uploadedImageUrl);
      const newData: DataType = {
        name: values.name,
        price: values.price,
        description: values.description,
        type: values.type,
        picture: uploadedImageUrl, // Use the uploaded image URL
      };
      createNewFood(newData);
      setData(newData);
    } catch (error) {
      message.error("Image upload failed. Please try again.");
      setLoading(false);
    }
  };

  const createNewFood = async (data: DataType) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price.toString());
      formData.append("description", data.description);
      formData.append("type", data.type);
      formData.append("picture", data.picture);

      const response = await axios.post(API_URL + "/foods", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      message.success("Food item created successfully!");
      setLoading(false);
    } catch (error) {
      message.error("Failed to create food item.");
    }
  };
  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    message.error("Failed to submit form!.");
  };

  // Function to handle file upload changes
  const handleChange = (info: any) => {
    let updatedFileList = [...info.fileList];
    updatedFileList = updatedFileList.slice(-1); // Keep only the latest file
    setFileList(updatedFileList);

    if (info.file.status === "done") {
      setImageUrl(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const getUrlUpdateUserImg = async (file: File) => {
    const CLOUD_NAME = "dugeyusti";
    const PRESET_NAME = "expert_upload";
    const FOLDER_NAME = "BitStorm";
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);
    formData.append("file", file);

    const options = {
      method: "POST",
      body: formData,
    };

    try {
      const res = await fetch(api, options);
      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      {/* Existing Form Items */}
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input product name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input product price!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please input product description!" },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        rules={[{ required: true, message: "Please select product type!" }]}
      >
        <Input />
      </Form.Item>

      {/* New Form Item for Image Upload */}
      <Form.Item
        label="Upload your certificate"
        name="upload"
        rules={[{ required: true, message: "Please upload your file!" }]}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          beforeUpload={() => false}
        >
          {fileList.length < 1 && (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
