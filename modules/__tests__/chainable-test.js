/*eslint-env mocha */
import expect from '../index'

describe('chaining assertions', function () {
  it('should allow chaining for array-like applications', function () {
    expect([ 1, 2, 'foo', 3 ])
      .toExist()
      .toBeAn(Array)
      .toInclude('foo')
      .toExclude('bar')
  })

  it('should allow chaining for number checking', function () {
    expect(3.14)
      .toExist()
      .toBeLessThan(4.2)
      .toBeLessThanOrEqualTo(3.14)
      .toBeGreaterThan(3.0)
      .toBeGreaterThanOrEqualTo(3.14)
  })
})
