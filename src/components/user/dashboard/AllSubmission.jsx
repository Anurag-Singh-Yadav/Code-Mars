
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function AllSubmission({ questionSolvedByUser }) {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);

    
    const itemsPerPage = 5;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const questionList = questionSolvedByUser || [];

    const visibleItems = questionList.slice(startIndex, endIndex);

    const handleShowMore = () => {
        setCurrentPage(currentPage + 1);
    };

    const handleShowPrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className='flex flex-col gap-2'>
            {visibleItems.map((question, index) => {
                const { title, date, verdict, qid } = question;
                const formattedDate = new Date(date).toLocaleDateString('en-GB');

                if (verdict.includes('Correct')) {
                    return (
                        <div key={index} className='correct py-1 px-3 shadow-md text-black rounded-md border-2'>
                            <div className='cursor-pointer py-1 text-lg font-sans underline text-blue-700 font-bold hover-text-accentColorDark' onClick={() => { navigate(`/ide/${qid}`) }}>{title}</div>
                            <div className='flex gap-2 justify-end'>
                                <div>{verdict}</div>
                                <div>Submitted on: {formattedDate}</div>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div key={index} className='wrong px-3 py-1 shadow-md text-black rounded-md border-2'>
                            <div className='cursor-pointer font-sans text-lg py-1 underline text-blue-700 font-bold hover-text-accentColorDark' onClick={() => { navigate(`/ide/${qid}`) }}>{title}</div>
                            <div className='flex gap-2 justify-end'>
                                <div>{verdict}</div>
                                <div>Submitted on: {formattedDate}</div>
                            </div>
                        </div>
                    );
                }
            })}

            <div className='flex justify-between px-1'>
            {questionList.length > itemsPerPage && currentPage > 0 && (
                <button onClick={handleShowPrevious} className=" rounded-md font-medium py-2 px-4 mt-2 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    Previous
                </button>
            )}

            {endIndex < questionList.length && (
                <button onClick={handleShowMore} className="rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium py-2 px-4 mt-2">
                    Next
                </button>
            )}
            </div>
        </div>
    )
}

export default AllSubmission;
