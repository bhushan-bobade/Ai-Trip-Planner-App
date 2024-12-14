import { Button } from '@/components/ui/button'
import { GetPlaceDetails } from '@/service/GlobalApi';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";
import { PHOTO_REF_URL } from '@/service/GlobalApi';

// const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY
function InfoSection({trip}) {
  
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(()=> {
    trip&&GetPlacePhoto();
  }, [trip])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:trip?.userSelection?.location?.label
    }
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
    <div>
      <img src={photoUrl?photoUrl:'/placeholder.jpg'} className='h-[340px] w-full object-cover rounded-xl'/>
        
        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                <div className='hidden sm:flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-600 text-sx md:text-md '>📅 {trip.userSelection?.noOfDays} Day</h2>
                    <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-600 text-sx md:text-md'>💸 {trip.userSelection?.budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-600 text-sx md:text-md'>🥂 No. Of Traveler: {trip.userSelection?.traveler}</h2>

                </div>
            </div>
            <Button><IoIosSend /></Button>
        </div>
    </div>
  )
}

InfoSection.propTypes = {
    trip: PropTypes.shape({
      userSelection: PropTypes.shape({
        location: PropTypes.shape({
          label: PropTypes.string
        }),
        noOfDays: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        traveler: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      })
    })
  }

InfoSection.defaultProps = {
    trip: {
      userSelection: {
        location: { label: '' },
        noOfDays: '',
        budget: '',
        traveler: ''
      }
    }
  }


export default InfoSection
