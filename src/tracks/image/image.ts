/**

 * This Source Code Form is subject to the terms of the Mozilla 
 * Public License, v. 2.0 that can be found in the LICENSE file.
 */

import { Track } from '../track';

import type { ImageClip } from '../../clips';

export class ImageTrack extends Track<ImageClip> {
	public readonly type = 'image';
}
