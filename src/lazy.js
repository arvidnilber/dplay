import Loading from './components/Loading';
import Loadable from 'react-loadable';


export const Home=Loadable({
    loader:()=>import('./components/Home/Home'),
    loading:Loading
})

export const Show=Loadable({
    loader:()=>import('./components/Show/Show'),
    loading:Loading
})

export const Post=Loadable({
  loader:()=>import('./components/Post'),
  loading:Loading  
})

//  export  const Posts =Loadable({
//     loader: () => import('../components/Posts'),
//     loading: Loading,
//   })