"use client"

import React, { useEffect, useState } from 'react' 
import CardJobs from '../../components/CardJobs/CardJobs' 
import jobData from '../../utils/jobs.json' 
import {useGetAllJobsQuery, useGetJobByIdQuery} from "@/lib/services/jobsApi"

const SearchJobs: React.FC = () => {

  const {data, error, isLoading, isFetching} = useGetAllJobsQuery(null)
  console.log("data: ", data)
  
  const [filteredProducts, setFilteredProducts] = useState(jobData.users) 
  const [selectedCategory, setSelectedCategory] = useState('') 
  const [selectedLocation, setSelectedLocation] = useState('') 

  if(isLoading || isFetching) return <p>Loading...</p>

  if (error) return <p>Some Error</p>

  // useEffect(() => {
  //   applyFilters() 
  // }, [selectedCategory, selectedLocation]) 

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value) 
  } 

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value) 
  } 

  const applyFilters = () => {
    let filtered = jobData.users 

    if (selectedCategory) {
      filtered = filtered.filter(user => user.category === selectedCategory) 
    }

    // if (selectedLocation) {
    //   filtered = filtered.filter(product => product.location === selectedLocation) 
    // }

    setFilteredProducts(filtered) 
  } 

  return (
    <div className="px-[124px]">
      <div className="container mx-auto mt-[100px] flex gap-[20px] items-start">
        <div className="flex justify-center mb-4 flex-col gap-[20px]">
          <div className="mr-4">
            <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="custom-select">
              <option value="">Filter by category</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Data Scientist">Data Scientist</option>
            </select>
          </div>

          <div>
            <select id="location" value={selectedLocation} onChange={handleLocationChange} className="custom-select">
              <option value="">Filter by location</option>
              <option value="Ciudad 1">Ciudad 1</option>
              <option value="Ciudad 2">Ciudad 2</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredProducts.map((user, index) => (
            <CardJobs  key={index} {...user} />
          ))}
        </div>
      </div>
        {
          data?.map(job  => (
            <div>
              <p>{job.title}</p>
              <p>{job.description}</p>
              <p>{job.id}</p>
            </div>
          ))
        }
    </div>
  ) 
}

export default SearchJobs 
