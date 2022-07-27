
import './Contact.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function Contact() {
  return (

    <div className='container'>
      <form action="/action_page.php">
        <div className='row'>
          <div className='col-25'>
            <label >First Name</label>
          </div>
          <div className='col-75'>
            <input type="text" name="firstname" placeholder="Your name.." />
          </div>
        </div>
        <div className='row'>
          <div className='col-25'>
            <label >Last Name</label>
          </div>
          <div className='col-75'>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          </div>
        </div>
        <div className='row'>
          <div className='col-25'>
            <label>Country</label>
          </div>
          <div className='col-75'>
            <select id="country" name="country">
              <option value="australia">Turkey</option>
              <option value="canada">France</option>
              <option value="usa">Algeria</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-25'>
            <label >Subject</label>
          </div>
          <div className='col-75'>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 200 }} ></textarea>
          </div>
        </div>
        <div className='row'>

        </div>
      </form>

      <div>
        <div>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
        </div>
      </div>
    </div>



  )
}
