import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'space'
})

class SpacePipe implements PipeTransform {
  transform (value: any, startSpace?: any): any {
    const spaceAt: number = value.indexOf('-') === 0 ? (startSpace + 1) : startSpace
    const subFrom: number = value.indexOf('-') === 0 ? value.indexOf('-') : value.indexOf('Z')

    return value.substring(subFrom, spaceAt) + ' ' + value.substring(spaceAt)
  }
}

export { SpacePipe }
