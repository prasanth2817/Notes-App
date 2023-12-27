import React from 'react'

function Mynotes() {
    let {Data,setData}=useContext(DashboardDataContext)
  return (
    <div>
    <div className="Mynotes-title"> 
    <span><img src={NotesIconDark} alt="icon" /></span>
        <span className="Mynotes-text">My Notes</span> 
    </div>
    <div>
       <p className="recently-viewed-text">Recently viewed</p>
    </div>
    <div className='card-groups'>
      <div>
      <Card className='card-data'>
        <Card.Body>
        <Card.Title>
          <div className='card-title-icon'>
          <div className='card-title-text'>Weekly Tasks</div>
          <div>
            <span><img src={editIcon} alt="icon" /></span>
            <span><img src={deleteIcon} alt="icon" /></span>
          </div>
          </div>
        </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
    <Card className='card-data'>
        <Card.Body>
        <Card.Title>
          <div className='card-title-icon'>
          <div className='card-title-text'>Lyrics</div>
          <div>
            <span><img src={editIcon} alt="icon" /></span>
            <span><img src={deleteIcon} alt="icon" /></span>
          </div>
          </div>
        </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
    <Card className='card-data'>
        <Card.Body>
        <Card.Title>
          <div className='card-title-icon'>
          <div className='card-title-text'>Lyrics</div>
          <div>
            <span><img src={editIcon} alt="icon" /></span>
            <span><img src={deleteIcon} alt="icon" /></span>
          </div>
          </div>
        </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    {
      Data.map((e,i)=>{
        return <CardElements key={i} title={e.title}
                     notes={e.notes}/>
      })
    } 
    </div>
</div>
</div>
  )
}

export default Mynotes