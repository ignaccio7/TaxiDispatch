const commitlintConfig = {
  // Extiende la configuración convencional de commits
  // Esto incluye reglas estándar como feat:, fix:, docs:, etc.
  extends: ['@commitlint/config-conventional'],
  
  rules: {
    // Define QUÉ tipos de commit son válidos
    'type-enum': [
      2,        // Nivel de error: 2=error, 1=warning, 0=off
      'always', // Cuándo aplicar: always=siempre, never=nunca
      [
        'feat',     // Nueva funcionalidad para el usuario
        'fix',      // Corrección de un bug
        'docs',     // Solo cambios en documentación
        'style',    // Cambios que no afectan lógica (espacios, formato)
        'refactor', // Cambio de código que no es bug ni feature
        'perf',     // Cambio que mejora performance
        'test',     // Agregar tests faltantes o corregir existentes
        'chore',    // Cambios en build, herramientas, librerías
        'ci',       // Cambios en archivos de CI (GitHub Actions, etc.)
        'build',    // Cambios que afectan build system
        'revert'    // Revierte un commit anterior
      ]
    ],
    
    // El tipo debe estar en minúsculas: "feat" ✅, "Feat" ❌
    'type-case': [2, 'always', 'lower-case'],
    
    // El tipo no puede estar vacío: "feat: algo" ✅, ": algo" ❌
    'type-empty': [2, 'never'],
    
    // El scope (ámbito) debe estar en minúsculas: "feat(api): algo" ✅
    'scope-case': [2, 'always', 'lower-case'],
    
    // El subject no puede usar estos casos:
    // "feat: Agregar login" ❌ (sentence-case)
    // "feat: agregar login" ✅ (lower-case está bien)
    'subject-case': [
      2, 
      'never', 
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    
    // El subject no puede estar vacío: "feat: " ❌
    'subject-empty': [2, 'never'],
    
    // El subject no puede terminar con punto: "feat: algo." ❌
    'subject-full-stop': [2, 'never', '.'],
    
    // Header completo máximo 100 caracteres
    'header-max-length': [2, 'always', 100],
    
    // Body debe tener línea en blanco antes
    'body-leading-blank': [1, 'always'],
    
    // Líneas del body máximo 100 caracteres
    'body-max-line-length': [2, 'always', 100],
    
    // Footer debe tener línea en blanco antes
    'footer-leading-blank': [1, 'always'],
    
    // Líneas del footer máximo 100 caracteres  
    'footer-max-line-length': [2, 'always', 100]
  }
};

export default commitlintConfig