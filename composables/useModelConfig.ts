export const useModelConfig = () => {
  // Get current active model configuration
  const getCurrentModel = () => {
    try {
      const config = localStorage.getItem('currentModelConfig')
      return config ? JSON.parse(config) : null
    } catch (error) {
      console.error('Error loading current model config:', error)
      return null
    }
  }

  // Get all model training history
  const getModelHistory = () => {
    try {
      const history = localStorage.getItem('modelHistory')
      return history ? JSON.parse(history) : []
    } catch (error) {
      console.error('Error loading model history:', error)
      return []
    }
  }

  // Save model configuration
  const saveModelConfig = (config: any) => {
    try {
      localStorage.setItem('currentModelConfig', JSON.stringify(config))
      
      // Also add to history
      const history = getModelHistory()
      history.push(config)
      localStorage.setItem('modelHistory', JSON.stringify(history))
      
      return true
    } catch (error) {
      console.error('Error saving model config:', error)
      return false
    }
  }

  // Clear model configuration
  const clearModelConfig = () => {
    try {
      localStorage.removeItem('currentModelConfig')
      return true
    } catch (error) {
      console.error('Error clearing model config:', error)
      return false
    }
  }

  // Check if a model is currently active
  const hasActiveModel = () => {
    const config = getCurrentModel()
    return config && config.status === 'active'
  }

  // Get model performance metrics
  const getModelMetrics = () => {
    const config = getCurrentModel()
    if (!config) return null

    return {
      accuracy: config.accuracy,
      modelId: config.modelId,
      trainingTime: config.trainingTime,
      algorithm: config.algorithm,
      trainedAt: config.trainedAt,
      samples: config.samples
    }
  }

  return {
    getCurrentModel,
    getModelHistory,
    saveModelConfig,
    clearModelConfig,
    hasActiveModel,
    getModelMetrics
  }
}