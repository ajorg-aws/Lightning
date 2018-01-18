module.exports = {
    'Base': require('./src/core/Base'),
    'Utils': require('./src/core/Utils'),
    'StageUtils': require('./src/core/StageUtils'),
    'Stage': require('./src/core/Stage'),
    'ShaderProgram': require('./src/core/ShaderProgram'),
    'ShaderBase': require('./src/core/ShaderBase'),
    'Shader': require('./src/core/Shader'),
    'Filter': require('./src/core/Filter'),
    'TextureManager': require('./src/core/TextureManager'),
    'Texture': require('./src/core/Texture'),
    'TextureSource': require('./src/core/TextureSource'),
    'TextureAtlas': require('./src/core/TextureAtlas'),
    'TextureAtlasTree': require('./src/core/TextureAtlasTree'),
    'View': require('./src/core/View'),
    'ObjectList': require('./src/core/ObjectList'),
    'ViewChildList': require('./src/core/ViewChildList'),
    'ViewTexturizer': require('./src/core/core/ViewTexturizer'),
    'ViewCore': require('./src/core/core/ViewCore'),
    'CoreContext': require('./src/core/core/CoreContext'),
    'CoreRenderState': require('./src/core/core/CoreRenderState'),
    'CoreQuadList': require('./src/core/core/CoreQuadList'),
    'CoreQuadOperation': require('./src/core/core/CoreQuadOperation'),
    'CoreFilterOperation': require('./src/core/core/CoreFilterOperation'),
    'CoreRenderExecutor': require('./src/core/core/CoreRenderExecutor'),
    'ViewText': require('./src/core/ViewText'),
    'TextRenderer': require('./src/core/TextRenderer'),
    'TextRendererSettings': require('./src/core/TextRendererSettings'),
    'TransitionManager': require('./src/animation/TransitionManager'),
    'TransitionSettings': require('./src/animation/TransitionSettings'),
    'Transition': require('./src/animation/Transition'),
    'AnimationManager': require('./src/animation/AnimationManager'),
    'AnimationSettings': require('./src/animation/AnimationSettings'),
    'AnimationActionSettings': require('./src/animation/AnimationActionSettings'),
    'AnimationActionItems': require('./src/animation/AnimationActionItems'),
    'Animation': require('./src/animation/Animation'),
    'Tools': require('./src/tools/Tools'),
    'ObjectListProxy': require('./src/tools/misc/ObjectListProxy'),
    'ObjectListWrapper': require('./src/tools/misc/ObjectListWrapper'),
    'ListView': require('./src/tools/views/ListView'),
    'BorderView': require('./src/tools/views/BorderView'),
    'FastBlurView': require('./src/tools/views/FastBlurView'),
    'Light3dShader': require('./src/tools/shaders/Light3dShader'),
    'PixelateShader': require('./src/tools/shaders/PixelateShader'),
    'InversionShader': require('./src/tools/shaders/InversionShader'),
    'FxaaFilter': require('./src/tools/filters/FxaaFilter'),
    'InversionFilter': require('./src/tools/filters/InversionFilter'),
    'BlurFilter': require('./src/tools/filters/BlurFilter'),
    'LinearBlurFilter': require('./src/tools/filters/LinearBlurFilter')
}