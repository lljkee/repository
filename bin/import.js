#!/usr/bin/node

var importer = require('../core/import')
var path = require('path')

var osver = '9.0'
var branch = 'test'
var is_latest = true
var arches = ['x86', 'x86_64'];
var root = '/media/sda9/repo'
var subgroup = 'stable'

arches.forEach(function(arch) {
	var dir = path.join(root, arch)
	importer.directory(dir, root, ['master'], [osver],
						[branch], [subgroup], is_latest);
})
