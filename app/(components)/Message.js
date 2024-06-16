import { useEffect, useState } from 'react';

export default function Message() {
  const [formDataList, setFormDataList] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    message: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api');
    const { data } = await response.json();
    setFormDataList(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });
    if (response.ok) {
      setFormValues({ name: '', message: '' });
      fetchData();
    }
  };

  return (
    <section className='py-5 bg-accent'>
      <div className='container mx-auto '>
        <div className='md:w-1/2 w-full p-4 mx-auto '>
          <h2 className='text-lg font-semibold mb-4'>
            Berikan Ucapan Spesial Anda Disini :
          </h2>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Nama'
              value={formValues.name}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            <textarea
              id='message'
              name='message'
              value={formValues.message}
              onChange={handleChange}
              placeholder='Beri Ucapan'
              className='w-full p-2 border border-gray-300 rounded-md'
              rows='3'
            ></textarea>
            <button
              type='submit'
              className='w-full bg-indigo-800 text-white p-2 rounded-md hover:bg-indigo-600'
            >
              Kirim
            </button>
          </form>
        </div>

        <div className='md:w-1/2 w-full p-4 mx-auto mb-10'>
          <ul className='space-y-2'>
            {formDataList?.map((data, index) => (
              <li className='p-3 border border-gray-300 rounded-md' key={index}>
                <p className='font-semibold'>{data.name}</p>
                <p>{data.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
