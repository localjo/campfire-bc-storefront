import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

import ContentTop from '../../svg/content-top-wide.inline.svg';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };
  render() {
    return (
      <>
        <ContentTop
          style={{ marginBottom: '-10px', zIndex: 1, position: 'relative' }}
        />
        <section className="section is-cover" style={{ minHeight: '90vh' }}>
          <div className="container">
            <h2 className="title has-text-centered">Contact Us</h2>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="container">
                  <div className="content">
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don’t fill this out:{' '}
                          <input
                            name="bot-field"
                            onChange={this.handleChange}
                          />
                        </label>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'name'}>
                          Your name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'name'}
                            onChange={this.handleChange}
                            id={'name'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'email'}>
                          Email
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'email'}
                            name={'email'}
                            onChange={this.handleChange}
                            id={'email'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'message'}>
                          Message
                        </label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            name={'message'}
                            onChange={this.handleChange}
                            id={'message'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <label className="label" htmlFor={'message'}>
                            <input
                              type="checkbox"
                              name={'consent'}
                              onChange={this.handleChange}
                              id={'consent'}
                              required={true}
                            />{' '}
                            I consent to campfirequestions.com and Local Jo LLC
                            collecting and storing the data submitted in this
                            form.
                          </label>
                        </div>
                      </div>
                      <div className="field">
                        <button className="btn" type="submit">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default () => (
  <Layout isStatic={true} title={'Contact'}>
    <ContactTemplate />
  </Layout>
);
