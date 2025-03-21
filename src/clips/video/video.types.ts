/**

 * This Source Code Form is subject to the terms of the Mozilla 
 * Public License, v. 2.0 that can be found in the LICENSE file.
 */

export interface GetWavBytesOptions {
	isFloat: boolean; // floating point or 16-bit integer
	numChannels: number;
	sampleRate: number;
}

export interface GetWavHeaderOptions extends GetWavBytesOptions {
	numFrames: number;
}
