import React, { useState } from 'react'
export const DashboardDataContext = React.createContext(null)
function DashboardContext({children}) {
const [Data,setData]= useState([{
id:0,
title:"Feedback",
notes: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit cum natus sed nesciunt eveniet distinctio animi ex earum perferendis et qui quisquam alias debitis vero consectetur quasi, ratione necessitatibus eius."
},
{
id:1,
title:"Weekly Tasks",
notes: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolore cum natus sed nesciunt temporibus. Numquam voluptatem blanditiis eum exercitationem unde dolore excepturi non, molestiae sequi autem, ad id."
},
{
id:2,
title:"Lyrics",
notes:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque provident, cupiditate deserunt deleniti! Perspiciatis asperiores voluptates atque quos, molestias iusto eveniet reiciendis nesciunt nisi!"
}])
  return <DashboardDataContext.Provider value={{Data,setData}}>
   {children}
  </DashboardDataContext.Provider>
}

export default DashboardContext