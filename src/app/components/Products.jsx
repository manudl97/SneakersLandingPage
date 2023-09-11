import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Button,
  } from "@material-tailwind/react";
   
function Products() {
    return (
    <div className='bg-gray-200'>
        <div className='max-w-[1200px] flex justify-between mx-auto pt-14 pb-6 px-14 items-center gap-x-8'>
    
      <Card className="w-96">
        <div className="h-96">
          <img
            src="https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="card-image"
            className="rounded-xl h-full w-full object-cover p-4 "
          />
        </div>
        <CardBody>
          <div className="mb-2 flex items-center justify-between px-4">
            <h1 className="text-black font-medium">
              Apple AirPods
            </h1>
            <h2 className="text-black font-medium">
              $95.00
            </h2>
          </div>
          <p className="text-black/70 px-4">
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging case.
          </p>
        </CardBody>
        <CardFooter className="py-3 flex items-center px-4">
          <Button className="w-full bg-gray-300 rounded-md text-white hover:bg-black"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-96">
        <div className="h-96">
          <img
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
            alt="card-image"
            className="rounded-xl h-full w-full object-cover p-4 "
          />
        </div>
        <CardBody>
          <div className="mb-2 flex items-center justify-between px-4">
            <h1 className="text-black font-medium">
              Apple AirPods
            </h1>
            <h2 className="text-black font-medium">
              $95.00
            </h2>
          </div>
          <p className="text-black/70 px-4">
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging case.
          </p>
        </CardBody>
        <CardFooter className="py-3 flex items-center px-4">
          <Button className="w-full bg-gray-300 rounded-md text-white hover:bg-black"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-96">
        <div className="h-96">
          <img
            src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="card-image"
            className="rounded-xl h-full w-full object-cover p-4 "
          />
        </div>
        <CardBody>
          <div className="mb-2 flex items-center justify-between px-4">
            <h1 className="text-black font-medium">
              Apple AirPods
            </h1>
            <h2 className="text-black font-medium">
              $95.00
            </h2>
          </div>
          <p className="text-black/70 px-4">
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging case.
          </p>
        </CardBody>
        <CardFooter className="py-3 flex items-center px-4">
          <Button className="w-full bg-gray-300 rounded-md text-white hover:bg-black"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
      </div>
      </div>
    );
  }


export default Products