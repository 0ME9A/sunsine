import React, {useState, useEffect} from 'react';
import PhotosList_II from '../../components/PhotosList_II';
import{ useRouter } from 'next/router';
import Loading from '../../components/Loading';

function Index(props) {
  const router = useRouter()
  const [search, setSearch] = useState(false)
  // console.log(router.query.search)

  useEffect(()=>{
    setSearch(router.query.search)
  }, [router.isReady])

  if (router.isReady) {
    return <PhotosList_II  type={"search"} title={search} query={router.query.search}/>    
  }else{
    return <Loading/>
  }

}

export default Index;