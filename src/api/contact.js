// api/contact.js
module.exports = async (req, res) => {
    if (req.method === 'POST') {
        // Process form data here
        const formData = req.body;
        console.log(formData); // Puoi gestire qui i dati del form

        // Esempio di risposta
        return res.status(200).json({ message: 'Form data received successfully!' });
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
};
