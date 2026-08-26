import * as resources from '../resources/c.js';

export class c {
  // Duplicate Java fields are disambiguated by role and type.
  static aCatalog = null;
  static bResources = null;
  static aSpriteRows = null;
  static bGroups = null;
  static cResourceGroups = null;
  static aLanguage = false;
  static aClipRect = new Int32Array(4);
  static bLanguageFilterStart = -1;
  static cLanguageFilterEnd = -1;

  static init() { return resources.init(); }
  static async getCatalog() { return resources.loadGroups(); }
  static async getResourceGroup(paramInt) { return resources.getResourceGroup(paramInt); }
  static setLanguage(paramInt) { return resources.setLanguage(paramInt); }
  static async getSpriteGroup(paramInt) { return resources.getSpriteGroup(paramInt); }
  static async loadResources(paramInt) { return resources.loadResources(paramInt); }
  static async unloadResource(paramInt) { return resources.unloadResource(paramInt); }
  static async unloadGroup(paramInt) { return resources.unloadGroup(paramInt); }
  static getResource(paramInt) { return resources.getResource(paramInt); }
  static getString(paramInt) { return resources.getString(paramInt); }
  static getStringFormatted(paramInt, paramArrayOfString) { return resources.getStringFormatted(paramInt, paramArrayOfString); }
  static async getLanguageNames() { return resources.getLanguageNames(); }
  static getSpriteData(paramInt1, paramInt2) { return resources.getSpriteData(paramInt1, paramInt2); }
  static drawSprite(paramInt1, paramInt2, paramInt3, paramGraphics) {
    return resources.drawSprite(paramInt1, paramInt2, paramInt3, paramGraphics);
  }
}

export default c;
