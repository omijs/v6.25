import * as _ from './utils/utils';

export default ({ components: c, strings: s, useAsButton, inline, appClass, width }) => {
  const hidden = con => con ? '' : 'style="display:none" hidden';

  // 有两种颜色格式的时候才显示
  const hiddenColor = (interaction, con) => {
    let count = 0
    if (interaction.hex) count++
    if (interaction.rgba) count++
    if (interaction.hsla) count++
    if (interaction.hsva) count++
    if (interaction.cmyk) count++
    if (count > 1 && con) {
      return ''
    }
    return 'style="display:none" hidden'
  }


  const root = _.createFromTemplate(`
      <div data-key="root" class="pickr">

        ${useAsButton ? '' : '<button type="button" data-key="button" class="pcr-button"></button>'}

        <div data-key="app" class="pcr-app ${appClass || ''}" ${`style="${inline ? 'position: unset;' : ''}${width ? `width:${width};` : ''}"`}>
          <div class="pcr-selection" ${hidden(c.palette)}>
            <div data-con="preview" class="pcr-color-preview" ${hidden(c.preview)}>
              <button type="button" data-key="lastColor" class="pcr-last-color"></button>
              <div data-key="currentColor" class="pcr-current-color"></div>
            </div>

            <div data-con="palette" class="pcr-color-palette">
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="palette" class="pcr-palette"></div>
            </div>

            <div data-con="hue" class="pcr-color-chooser" ${hidden(c.hue)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-hue pcr-slider"></div>
            </div>

            <div data-con="opacity" class="pcr-color-opacity" ${hidden(c.opacity)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-opacity pcr-slider"></div>
            </div>
          </div>

          <div class="pcr-swatches ${c.palette ? '' : ' pcr-last'}" data-key="swatches"></div> 

          <div data-con="interaction" class="pcr-interaction" ${hidden(Object.keys(c.interaction).length)}>
            <input data-key="result" class="pcr-result" type="text" spellcheck="false" ${hidden(c.interaction.input)}>

            <input data-arr="options" class="pcr-type" data-type="HEXA" value="HEXA" type="button" ${hiddenColor(c.interaction, c.interaction.hex)}>
            <input data-arr="options" class="pcr-type" data-type="RGBA" value="RGBA" type="button" ${hiddenColor(c.interaction, c.interaction.rgba)}>
            <input data-arr="options" class="pcr-type" data-type="HSLA" value="HSLA" type="button" ${hiddenColor(c.interaction, c.interaction.hsla)}>
            <input data-arr="options" class="pcr-type" data-type="HSVA" value="HSVA" type="button" ${hiddenColor(c.interaction, c.interaction.hsva)}>
            <input data-arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${hiddenColor(c.interaction, c.interaction.cmyk)}>

            <input data-key="clear" class="pcr-clear" value="${s.clear || 'Clear'}" type="button" ${hidden(c.interaction.clear)}>
            <input data-key="save" class="pcr-save" value="${s.save || 'Save'}" type="button" ${hidden(c.interaction.save)}>
          </div>
        </div>
      </div>
    `);

  const int = root.interaction;

  // Select option which is not hidden
  int.options.find(o => !o.hidden && !o.classList.add('active'));

  // Create method to find currenlty active option
  int.type = () => int.options.find(e => e.classList.contains('active'));
  return root;
}
