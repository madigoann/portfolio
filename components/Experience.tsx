'use client';
import { motion } from 'framer-motion';
import React from 'react'
import ExperienceCards from './ExperienceCards';

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left
     md:flex-row max-w-full px-50 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Work Experience</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-40'>
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
        </div>
    </motion.div>
    
  )
}