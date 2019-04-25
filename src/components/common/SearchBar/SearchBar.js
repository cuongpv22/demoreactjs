import React from 'react';
import { Form, InputGroup, Input, InputGroupAddon } from 'reactstrap';
import { debounce } from '../../../utils';

class SearchBar extends React.Component {
  handleChange(term) {
    this.props.search(term);
  }

  render() {
    const handleChange = debounce(term => this.handleChange(term), 600);
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup className={`search-box pull-left ${this.props.className}`}>
          <InputGroupAddon addonType="prepend" className="input-group-addon"><i className="icon-magnifier" /></InputGroupAddon>
          <Input
            type="text"
            placeholder={this.props.placeholder || 'SEARCH'}
            name="search"
            onChange={event => handleChange(event.target.value)}
          />
        </InputGroup>
      </Form>
    );
  }
}

export default SearchBar;
