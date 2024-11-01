import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const HTTP = import.meta.env.VITE_API;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  function createStudent(body) {
    return axios.post(`${HTTP}/students`, body);
  }

  const mutation = useMutation({
    mutationFn: createStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      navigate(-1);
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, surname, age };
    mutation.mutate(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mt-12 p-8 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-opacity-20 backdrop-blur-md rounded-3xl shadow-2xl space-y-8"
    >
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-4 tracking-wider">
        Add a Student
      </h2>

      <div className="space-y-4">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="large"
          placeholder="Enter name"
          allowClear
          required
          className="rounded-full p-4 bg-white/90 placeholder-gray-500 shadow-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-purple-500"
        />
        <Input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          size="large"
          placeholder="Enter surname"
          allowClear
          required
          className="rounded-full p-4 bg-white/90 placeholder-gray-500 shadow-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-purple-500"
        />
        <Input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          size="large"
          placeholder="Enter age"
          allowClear
          required
          className="rounded-full p-4 bg-white/90 placeholder-gray-500 shadow-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-purple-500"
        />
      </div>

      <Button
        htmlType="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        size="large"
        type="primary"
      >
        Submit
      </Button>
    </form>
  );
}

export default Add;
