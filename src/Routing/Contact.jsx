
function Contact() {
    return (
        <>
            <div className="container mt-5" >
                <h2>Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis nec sapien vel rutrum. Nulla
                            tristique auctor fringilla. Sed gravida auctor massa, vitae feugiat massa pellentesque sed.</p>
                        <ul className="list-unstyled">
                            <li><strong>Address:</strong> 123 Street, City, Country</li>
                            <li><strong>Phone:</strong> +91 123 456 7890</li>
                            <li><strong>Email:</strong> abc@example.com</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows={5} placeholder="Enter your message" defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
