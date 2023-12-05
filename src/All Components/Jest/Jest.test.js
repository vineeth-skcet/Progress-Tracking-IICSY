import {Add,Sub} from '../Jest/Jest'
test('add',()=>
{
    expect(Add(1,2)).toBe(3);
    expect(Add(-2,3)).toBe(1);
})
test('sub',()=>
{
    expect(Sub(2,1)).toBe(1);
    expect(Sub(2,-1)).toBe(3);
})