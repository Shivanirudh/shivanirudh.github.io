import React from 'react';

function Contact() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Contact Me</h1>
        <p>
            I'd love to hear from you! Feel free to reach out through any of the following channels:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                    <strong>Email:</strong> <a href="mailto:shivanirudh2001@gmail.com">shivanirudh2001@gmail.com</a>
                </li>
                <li>
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shivanirudh-s-g/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/shivanirudh-s-g/</a>
                </li>
                <li>
                    <strong>X (Twitter):</strong> <a href="https://x.com/shivanirudh4" target="_blank" rel="noopener noreferrer">https://x.com/shivanirudh4</a>
                </li>
                <li>
                    <strong>GitHub:</strong> <a href="https://github.com/Shivanirudh" target="_blank" rel="noopener noreferrer">github.com/Shivanirudh</a>
                </li>
            </ul>
        </div>
      <p>
        Or send me a message here:
      </p>

      <form style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
          <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Send</button>
      </form>
    </div>
  );
}

export default Contact;