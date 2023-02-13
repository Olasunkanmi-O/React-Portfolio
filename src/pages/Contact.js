
// component for the contact page
function Contact (){
        return(
        <div className="contact">
            <h2>Contact Me</h2>
            <form>

                <label>
                    {/* label for the contact form  */}
                    Name: 
                    <input type="text" placeholder="Enter your name"/>
                </label>

                <label>
                    Email: 
                    <input type="text" placeholder="Enter your Email"/>
                </label>

                <label>
                    Message: 
                    <textarea name="message" placeholder="please enter your message" rows={7}/>
                </label>

                <button type="submit">Submit</button>                

            </form>

            <footer>
                <p>copyright &copy; Olasunkanmi 2023</p>
            </footer>

        </div>
    )
}
export default Contact;