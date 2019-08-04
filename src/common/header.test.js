import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from './header';


Enzyme.configure({adapter: new Adapter()});

describe('Header', () => {
  let component = null;
  const getCurrencies = jest.fn();
  beforeEach(() => {
    component = shallow(<Header recordsLimit='5' actions={ { getCurrencies } }/>);
  });

  it('should contain 1 dropdown ', () => {
    expect(component.find('#dropdown').length).toEqual(1);
  });
  it('should contain 2 links ', () => {
    expect(component.find('.nav-link').length).toEqual(2);
  });
  it('dropdown should call dropDownChanged method', () => {
    const instance = component.instance();
    const spy = jest.spyOn(instance, 'dropDownChanged');
    instance.forceUpdate();
    component.find('#dropdown').simulate('change', { target: { value : '10' } });
    expect(spy).toHaveBeenCalled();
  });
});